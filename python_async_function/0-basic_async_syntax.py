#!/usr/bin/env python3
import random
import asyncio

async def wait_random(max_delay = 10) -> float:
    value:float = random.uniform(0, max_delay)
    await asyncio.sleep(value)
    return (value)
