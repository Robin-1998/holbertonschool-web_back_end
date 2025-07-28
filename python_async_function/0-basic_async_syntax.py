#!/usr/bin/env python3
""" Project Holberton - 0. The basics of async """
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """ asynchronous coroutine """
    value: float = random.uniform(0, max_delay)
    await asyncio.sleep(value)
    return (value)
