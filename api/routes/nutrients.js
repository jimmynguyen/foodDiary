module.exports.getNutrients = function(request,response,connectionpool) {
    connectionpool.getConnection(function(error,connection){
        if (error) {
            response.json({"code" : 100, "status" : "Error in database connection"});
            return;
        }
        
        connection.query("select * from nutrients order by id",function(error,rows){
            connection.release();
            if(!error) {
                response.json(rows);
                return;
            }           
        });

        // connection.on('error', function(error) {      
        //     response.json({"code" : 100, "status" : "Error in database connection"});
        //     return;     
        // });
    });
}