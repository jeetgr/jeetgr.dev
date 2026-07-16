import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { env } from "@/env";

const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

const contactRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
  prefix: "contact",
  analytics: true,
});

export async function checkContactRateLimit(key: string): Promise<boolean> {
  const { success } = await contactRateLimiter.limit(key);
  return success;
}
