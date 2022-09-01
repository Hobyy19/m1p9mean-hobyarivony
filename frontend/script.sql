use e-kaly;

create table user();

db.createView(
    "plat_user",
    "plat" ,
    [ { $project : {img : 1 , designation : 1,} }]
)

db.createView(
   "restaurant",
   "user",
   [ { $match: { profil: "Restaurant" } } ]
)

db.plat.aggregate([
    {
        $lookup: {
            from: "user",
            localField: { toObjectId: "id_user" },
            foreignField: "_id",
            as: "plat_user"
        }
    }
]).pretty();

db.plat.aggregate([
  { "$lookup": {
    "from": "user",
    "pipeline": [
      { "$addFields": { "user_id": { "$toObjectId": "$user_id" }}},
      { "$match": { "$expr": { "$eq": [ "$$_id", "$user_id" ] } } }
    ],
    "as": "plat_user"
  }}
])

db.plat.aggregate([
  { "$lookup": {
    "from": "user",
    "let": { "user_Id": "_id" },
    "pipeline": [
      { "$addFields": { "_id": { "$toObjectId": "$_id" }}},
      { "$match": { "$expr": { "$eq": [ "$_id", "$user_Id" ] } } }
    ],
    "as": "plat_user"
  }}
])

db.plat.aggregate([
  { "$lookup": {
    "from": "user",
    "let": { "userId": "$_id" },
    "pipeline": [
      { "$addFields": { "userId": { "$toObjectId": "$userId" }}},
      { "$match": { "$expr": { "$eq": [ "$userId", "$$userId" ] } } }
    ],
    "as": "output"
  }}
])

db.plat.aggregate(
  [
    {
      $project:
        { 
          _id: 0,
          bar: { $toObjectId: "$id_user" }
        }
    }
  ]
).pretty()

db.createView (
    "plat_user",
    "plat",
    [
        {
            $lookup: {
                from: "user",
                localField:"id_user",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $project:
            {
                _id: 1,
                img: 1,
                designation: 1,
                prix_brut: 1,
                prix_vente: 1,
                resto_id : "$user._id",
                restaurant: "$user.nom"
            }
        }
    ]
);