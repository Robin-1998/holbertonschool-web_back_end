#!/usr/bin/env python3
"""
Function List all documents in Python
"""
import pymongo


def list_all(mongo_collection):
    """ function that lists all documents in a collection """
    if mongo_collection is None:
        return []
    else:
        return list(mongo_collection.find())
