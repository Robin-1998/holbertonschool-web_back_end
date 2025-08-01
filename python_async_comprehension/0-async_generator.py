#!/usr/bin/env python3
""" Project Holberton - 0. Async Generator """
import asyncio
import random

async def async_generator():
    for i in range (10):
        await asyncio.sleep(1)
        yield random.uniform(0,10)
# Renvoie un nombre flottant aléatoire entre deux paramètres donnés
