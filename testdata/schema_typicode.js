const getTypiCodeScheme = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "array",
    "uniqueItems": false,
    "additionalItems": false,
    "items": {
        "$id": "#/items",
        "type": "object",
        "required": [
            "userId",
            "id",
            "title",
            "body"
        ],
        "properties": {
            "userId": {
                "$id": "#/items/properties/userId",
                "type": "integer"
            },
            "id": {
                "$id": "#/items/properties/id",
                "type": "integer"
            },
            "title": {
                "$id": "#/items/properties/title",
                "type": "string"
            },
            "body": {
                "$id": "#/items/properties/body",
                "type": "string"
            }
        },
        "additionalProperties": false
    }
};

module.exports = {
    getTypiCodeScheme
}