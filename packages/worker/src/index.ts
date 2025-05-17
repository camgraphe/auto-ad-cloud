import { Queue, Worker, Job } from 'bullmq'
import { JobStatus } from '@auto-ad-cloud/shared'

export const queue = new Queue('jobs')

async function processJob(job: Job) {
  // Step a) download video from S3
  // Step b) ffmpeg normalize audio
  // Step c) whisper.cpp medium -> transcript.srt
  // Step d) openai o3 -> audio-description script
  // Step e) elevenlabs TTS voice 'Rachel' -> ad.wav
  // Step f) ffmpeg merge video + ad.wav as 2nd audio track
  // Step g) upload output + assets to S3; update job status
  return JobStatus.enum.DONE
}

new Worker('jobs', processJob)
