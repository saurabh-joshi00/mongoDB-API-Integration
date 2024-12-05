const express = require('express');
const server = express(); //Executable Function
const dbConnection = require('./dbConnection.js');
const mongodb = require('mongodb');

//parse requests of content-type - application/json
server.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

server.get('/', (request, response) => {
    response.send('Server is started...');
})

//Categories Module API through GET Method
server.get('/api/admin/categories/add', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var data = {
        name : request.query.name,
        image : request.query.image
    }

    var data = await collection.insertOne(data);

    console.log(data);

    const result = {
        status : true,
        message : 'Category Added Successfully',
        data : ''
    }
    response.send(result);

})

server.get('/api/admin/categories/view', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Category Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Category Found !!',
            data : []
        }
        response.send(result);

    }
})

server.get('/api/admin/categories/details', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('categories');

    var id = new mongodb.ObjectId(request.query.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Category Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Category Found !!',
            data : ''
        }
        response.send(result);
        
    }
})

//Brands Module API through GET Method
server.get('/api/admin/brands/add', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var data = {
        name : request.query.name,
        country : request.query.country
    }

    var data = await collection.insertOne(data);

    console.log(data);

    const result = {
        status : true,
        message : 'Brand Added Successfully',
        data : ''
    }
    response.send(result);

})

server.get('/api/admin/brands/view', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Brand Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Brand Found !!',
            data : []
        }
        response.send(result);

    }
})

server.get('/api/admin/brands/details', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('brands');

    var id = new mongodb.ObjectId(request.query.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Brand Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Brand Found !!',
            data : ''
        }
        response.send(result);
        
    }
})

//Sizes Module API through GET Method
server.get('/api/admin/sizes/add', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('sizes');

    var data = {
        label : request.query.label,
        type : request.query.type
    }

    var data = await collection.insertOne(data);

    console.log(data);

    const result = {
        status : true,
        message : 'Size Added Successfully',
        data : ''
    }
    response.send(result);

})

server.get('/api/admin/sizes/view', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('sizes');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Size Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Size Found !!',
            data : []
        }
        response.send(result);

    }
})

server.get('/api/admin/sizes/details', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('sizes');

    var id = new mongodb.ObjectId(request.query.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Size Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Size Found !!',
            data : ''
        }
        response.send(result);
        
    }
})

//Products Module API through GET Method
server.get('/api/admin/products/add', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('products');

    var data = {
        name : request.query.name,
        image : request.query.image,
        description : request.query.description,
        price : request.query.price,
        discounted_price : request.query.discounted_price,
        category_name : request.query.category_name,
        brand_name : request.query.brand_name,
        stock : request.query.stock,
        website : request.query.website
    }

    var data = await collection.insertOne(data);

    console.log(data);

    const result = {
        status : true,
        message : 'Product Added Successfully',
        data : ''
    }
    response.send(result);

})

server.get('/api/admin/products/view', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('products');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Product Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Product Found !!',
            data : []
        }
        response.send(result);

    }
})

server.get('/api/admin/products/details', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('products');

    var id = new mongodb.ObjectId(request.query.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Product Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Product Found !!',
            data : ''
        }
        response.send(result);
        
    }
})

//Colors Module API through POST Method
server.post('/api/admin/colors/add', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('colors');

    var data = {
        name : request.body.name,
        code : request.body.code
    }

    var data = await collection.insertOne(data);

    console.log(request.body);

    const result = {
        status : true,
        message : 'Color Added Successfully',
        data : ''
    }
    response.send(result);

})

server.post('/api/admin/colors/view', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('colors');

    var data = await collection.find().toArray();

    if(data.length != 0){
        const result = {
            status : true,
            message : 'Color Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Color Found !!',
            data : []
        }
        response.send(result);

    }
})

server.post('/api/admin/colors/details', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('colors');

    var id = new mongodb.ObjectId(request.body.id);
    var data = await collection.findOne(id);

    console.log(data);

    if(data != null){
        const result = {
            status : true,
            message : 'Color Found Successfully',
            data : data
        }
        response.send(result);

    } else{
        const result = {
            status : false,
            message : 'No Color  Found !!',
            data : ''
        }
        response.send(result);
        
    }
})

//Update Query method through POST Method
// server.post('/api/admin/colors/update', async (request, response) => {

//     const database = await dbConnection();
//     const collection = database.collection('colors');

//     var data = {
//         name : request.body.name,
//         code : request.body.code
//     }

//     try {
//         var id = new mongodb.ObjectId(request.body.id);

//         var data = await collection.updateOne({_id : id}, { $set : data });

//         console.log(request.body);

//         const result = {
//             status : true,
//             message : 'Color Updated Successfully',
//             data : ''
//         }
//         response.send(result);

//     } catch (error) {
//         const result = {
//             status : false,
//             message : 'Something went wrong !!',
//             data : ''
//         }
//         response.send(result);

//     }
// })

//Delete Query method through POST Method
// server.post('/api/admin/colors/delete', async (request, response) => {

//     const database = await dbConnection();
//     const collection = database.collection('colors');

//     try {
//         var id = new mongodb.ObjectId(request.body.id);

//         var data = await collection.deleteOne({_id : id});

//         console.log(request.body);

//         const result = {
//             status : true,
//             message : 'Color Deleted Successfully',
//             data : ''
//         }
//         response.send(result);

//     } catch (error) {
//         const result = {
//             status : false,
//             message : 'Something went wrong !!',
//             data : ''
//         }
//         response.send(result);

//     }
// })

//Update functionality through PUT/PATCH Method
// server.patch('/api/admin/colors/update/:id', async (request, response) => {

//     const database = await dbConnection();
//     const collection = database.collection('colors');

//     var data = {
//         name : request.body.name,
//         code : request.body.code,
//     }

//     try {
//         var id = new mongodb.ObjectId(request.params.id);

//         var data = await collection.updateOne({_id : id}, { $set : data });

//         console.log(request.body);

//         const result = {
//             status : true,
//             message : 'Color Updated Successfully',
//             data : ''
//         }
//         response.send(result);

//     } catch (error) {
//         const result = {
//             status : false,
//             message : 'Something went wrong !!',
//             data : ''
//         }
//         response.send(result);

//     }
// })

server.put('/api/admin/colors/update/:id', async (request, response) => {
    

    const database = await dbConnection();
    const collection = database.collection('colors');

    var data = {
        name : request.body.name,
        code : request.body.code,
    }

    try {
        var id = new mongodb.ObjectId(request.params.id);

        var data = await collection.updateOne({_id : id}, { $set : data });

        console.log(request.body);

        const result = {
            status : true,
            message : 'Color Updated Successfully',
            data : ''
        }
        response.send(result);

    } catch (error) {
        const result = {
            status : false,
            message : 'Something went wrong !!',
            data : ''
        }
        response.send(result);

    }
})

//Delete functionality through DELETE Method
server.delete('/api/admin/colors/delete/:id', async (request, response) => {

    const database = await dbConnection();
    const collection = database.collection('colors');

    try {
        var id = new mongodb.ObjectId(request.params.id);

        var data = await collection.deleteOne({_id : id});

        console.log(request.body);

        const result = {
            status : true,
            message : 'Color Deleted Successfully',
            data : ''
        }
        response.send(result);

    } catch (error) {
        const result = {
            status : false,
            message : 'Something went wrong !!',
            data : ''
        }
        response.send(result);

    }
})

server.listen('1200', () => {
    console.log('Server is running on port 1200');
});