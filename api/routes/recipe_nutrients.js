var recipe_nutrients = function(request,response,connectionpool) {
    connectionpool.getConnection(function(error,connection){
        if (error) {
            connection.release();
            response.json({"code" : 100, "status" : "Error in database connection"});
            return;
        }
        
        connection.query("select * from recipe_nutrients order by id",function(error,rows){
            connection.release();
            if(!error) {
                response.json(rows);
            }           
        });

        connection.on('error', function(error) {      
            response.json({"code" : 100, "status" : "Error in database connection"});
            return;     
        });
    });
}

module.exports = recipe_nutrients;