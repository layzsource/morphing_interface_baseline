let midiAccess = null;
let ccCallbacks = [];
let isInitialized = false;

export function initMIDI(callback) {
  if (isInitialized) {
    callback();
    return;
  }

  if (!navigator.requestMIDIAccess) {
    console.warn('🎹 Web MIDI API not supported - MIDI functionality disabled');
    isInitialized = true;
    callback();
    return;
  }

  navigator.requestMIDIAccess()
    .then(access => {
      midiAccess = access;
      setupMIDIDevices();
      isInitialized = true;
      console.log('🎹 MIDI system initialized');
      callback();
    })
    .catch(error => {
      console.warn('🎹 MIDI access denied or failed:', error.message);
      isInitialized = true;
      callback();
    });
}

export function onCC(callback) {
  ccCallbacks.push(callback);
}

export function getMIDIDeviceCount() {
  if (!midiAccess) return 0;
  return Array.from(midiAccess.inputs.values()).length;
}

function setupMIDIDevices() {
  if (!midiAccess) return;

  const inputs = Array.from(midiAccess.inputs.values());

  if (inputs.length === 0) {
    console.log('🎹 No MIDI input devices found');
    return;
  }

  console.log(`🎹 Found ${inputs.length} MIDI input device(s):`);

  inputs.forEach(input => {
    console.log(`  - ${input.name}`);
    input.onmidimessage = handleMIDIMessage;
  });

  midiAccess.onstatechange = handleDeviceStateChange;
}

function handleMIDIMessage(event) {
  const [status, cc, value] = event.data;

  if ((status & 0xF0) === 0xB0) {
    const device = event.target.name || 'Unknown Device';

    ccCallbacks.forEach(callback => {
      try {
        callback({ cc, value, device });
      } catch (error) {
        console.error('🎹 Error in CC callback:', error);
      }
    });
  }
}

function handleDeviceStateChange(event) {
  const device = event.port;

  if (device.type === 'input') {
    if (device.state === 'connected') {
      console.log(`🎹 MIDI device connected: ${device.name}`);
      device.onmidimessage = handleMIDIMessage;
    } else if (device.state === 'disconnected') {
      console.log(`🎹 MIDI device disconnected: ${device.name}`);
    }
  }
}
