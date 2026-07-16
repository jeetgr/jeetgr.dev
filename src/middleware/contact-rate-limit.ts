import { createMiddleware } from "@tanstack/react-start";
import { getRequestIP, setResponseStatus } from "@tanstack/react-start/server";

import { checkContactRateLimit } from "@/lib/rate-limit";

export const contactRateLimitMiddleware = createMiddleware().server(
  async ({ next }) => {
    const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
    const allowed = await checkContactRateLimit(ip);

    if (!allowed) {
      setResponseStatus(429);
      throw new Error("Too many requests");
    }

    return await next();
  }
);
