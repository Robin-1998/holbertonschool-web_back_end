#!/usr/bin/env python3
"""
Function List all documents in Python
"""
import pymongo

def insert_school(mongo_collection, **kwargs):
    """
    function that inserts a new document in a collection based on kwargs
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
