import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";

export const env = createEnv({
  server: {
    RESEND_API_KEY: v.pipe(v.string(), v.minLength(1)),
    UPSTASH_REDIS_REST_URL: v.pipe(v.string(), v.url()),
    UPSTASH_REDIS_REST_TOKEN: v.pipe(v.string(), v.minLength(1)),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
