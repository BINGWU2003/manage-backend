import preview from '@/assets/audio/preview.mp3'
import reminder from '@/assets/audio/reminder.mp3'
export const websocket = function () {
  const ws = new WebSocket('ws://lenient-new-ghoul.ngrok-free.app/ws/' + 'test')
  const previewAudio = new Audio(preview)
  const reminderAudio = new Audio(reminder)
  ws.onopen = function () {
    console.log('WebSocket Client Connected')
  }
  ws.onmessage = function (message) {
    if (message.type === 1) {
      previewAudio.play()
    } else if (message.type === 2) {
      reminderAudio.play()
    }
  }
  ws.onclose = function () {
    console.log('WebSocket Client Closed')
  }
  return ws
}