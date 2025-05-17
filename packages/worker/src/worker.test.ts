import { queue } from './index'

test('process job', async () => {
  const job = await queue.add('test', {})
  // Mocked processing returns DONE immediately
  const state = await job.waitUntilFinished()
  expect(state).toBe('DONE')
})
