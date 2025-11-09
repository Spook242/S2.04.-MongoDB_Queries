// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find();

// 2. Mostrar el `restaurant_id`, `name`, `borough` i `cuisine`.
db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } );

// 3. Mostrar el `restaurant_id`, `name`, `borough` i `cuisine`, però excloure el camp `_id`.
db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 } );

// 4. Mostrar `restaurant_id`, `name`, `borough` i `zipcode`, però excloure el camp `_id`.
db.restaurants.find( {}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 } );

// 5. Mostrar tots els restaurants que estan en el Bronx.
db.restaurants.find( { borough: "Bronx" } );

// 6. Mostrar els primers 5 restaurants que estan en el Bronx.
db.restaurants.find( { borough: "Bronx" } ).limit(5);

// 7. Mostrar el pròxim 5 restaurants després de saltar els primers 5 del Bronx.
db.restaurants.find( { borough: "Bronx" } ).skip(5).limit(5);

// 8. Trobar els restaurants que tenen un *score* de més de 90.
db.restaurants.find( { "grades.score": { $gt: 90 } } );

// 9. Trobar els restaurants que tenen un *score* de més de 80 però menys que 100.
db.restaurants.find( { "grades.score": { $gt: 80, $lt: 100 } } );

// 10. Trobar els restaurants que es localitzen en valor de latitud menys de -95.754168.
db.restaurants.find( { "address.coord.1": { $lt: -95.754168 } } );

// 11. Trobar els restaurants que no preparen cap cuisine de 'American' i la seva qualificació és superior a 70 i longitud inferior a -65.754168.
db.restaurants.find( { 
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
} );

// 12. Mateixa consulta anterior, sense utilitzar `$and` operador.
db.restaurants.find( { 
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 }
} );

// 13. Trobar els restaurants que no preparen cap cuisine de 'American', van obtenir un grau 'A' i no pertanyen a Brooklyn. Ordenats per cuisine descendent.
db.restaurants.find( {
  cuisine: { $ne: "American" },
  "grades.grade": "A",
  borough: { $ne: "Brooklyn" }
} ).sort( { cuisine: -1 } );

// 14. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que contenen 'Wil' com les tres primeres lletres en el seu nom.
db.restaurants.find( 
  { name: { $regex: "^Wil" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 15. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que contenen 'ces' com les últimes tres lletres en el seu nom.
db.restaurants.find( 
  { name: { $regex: "ces$" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 16. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que contenen 'Reg' en algun lloc en el seu nom.
db.restaurants.find( 
  { name: { $regex: "Reg" } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 17. Trobar els restaurants que pertanyen al Bronx i van preparar qualsevol plat americà o xinès.
db.restaurants.find( {
  borough: "Bronx",
  $or: [
    { cuisine: "American" },
    { cuisine: "Chinese" }
  ]
} );

// 18. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que pertanyen a 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
db.restaurants.find( 
  { borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 19. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que no pertanyen a 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
db.restaurants.find( 
  { borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 20. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que aconsegueixin un *score* que no és més de 10 (<= 10).
db.restaurants.find( 
  { "grades.score": { $lte: 10 } },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 21. Trobar `restaurant_id`, `name`, `borough` i `cuisine` per a aquells que preparen peix (excepte 'American' i 'Chinees') O el nom comença amb 'Wil'.
db.restaurants.find( 
  { 
    $or: [
      { cuisine: { $nin: ["American", "Chinees"] } },
      { name: { $regex: "^Wil" } }
    ]
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);

// 22. Trobar `restaurant_id`, `name`, i `grades` per a aquells que aconsegueixin un grau "A" i un *score* 11 en la data "2014-08-11T...".
db.restaurants.find( 
  { 
    grades: { 
      $elemMatch: {
        grade: "A",
        score: 11,
        date: ISODate("2014-08-11T00:00:00Z")
      }
    }
  },
  { restaurant_id: 1, name: 1, grades: 1 }
);

// 23. Trobar `restaurant_id`, `name` i `grades` on el 2n element de `grades` conté grau "A", *score* 9 i la data "2014-08-11T...".
db.restaurants.find( 
  { 
    "grades.1.grade": "A",
    "grades.1.score": 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z")
  },
  { restaurant_id: 1, name: 1, grades: 1 }
);

// 24. Trobar `restaurant_id`, `name`, `address` i `coord` on el segon element del array `coord` conté un valor que és més de 42 i fins a 52.
db.restaurants.find( 
  { "address.coord.1": { $gt: 42, $lte: 52 } },
  { restaurant_id: 1, name: 1, address: 1 }
);

// 25. Organitzar el nom dels restaurants en ordre ascendent.
db.restaurants.find().sort( { name: 1 } );

// 26. Organitzar el nom dels restaurants en ordre descendent.
db.restaurants.find().sort( { name: -1 } );

// 27. Organitzar per `cuisine` ascendent i `borough` descendent.
db.restaurants.find().sort( { cuisine: 1, borough: -1 } );

// 28. Saber totes les direccions que no contenen el carrer.
db.restaurants.find( { "address.street": { $exists: false } } );

// 29. Seleccionar documents on el valor del camp `coord` és Double.
db.restaurants.find( { "address.coord.0": { $type: "double" } } );

// 30. Seleccionar `restaurant_id`, `name` i `grade` on el *score* dividit per 7 dóna 0 de resta.
db.restaurants.find( 
  { "grades.score": { $mod: [7, 0] } },
  { restaurant_id: 1, name: 1, grades: 1, _id: 0 }
);

// 31. Trobar `name`, `borough`, `coord` i `cuisine` per a aquells que contenen 'mon' en algun lloc del seu nom.
db.restaurants.find( 
  { name: { $regex: "mon", $options: "i" } },
  { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }
);

// 32. Trobar `name`, `borough`, `coord` i `cuisine` per a aquells que contenen 'Mad' com primeres tres lletres del seu nom.
db.restaurants.find( 
  { name: { $regex: "^Mad" } },
  { name: 1, borough: 1, "address.coord": 1, cuisine: 1, _id: 0 }