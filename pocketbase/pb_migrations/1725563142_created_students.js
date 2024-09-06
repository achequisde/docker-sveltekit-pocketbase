/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "134blqacspacp3s",
    "created": "2024-09-05 19:05:42.562Z",
    "updated": "2024-09-05 19:05:42.562Z",
    "name": "students",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "80nxxl10",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("134blqacspacp3s");

  return dao.deleteCollection(collection);
})
