var mongo = require('../clients/mongoClient');

mongoRoutes.posts={};

// take in project id, like type (contributor or spectator), and liker
mongoRoutes.posts['/api/data/likes/add'] = function(req, res) {
  if(!(req.body.hasOwnProperty('id')) ||
    !(req.body.hasOwnProperty('type')) ||
    !(req.body.hasOwnProperty('user'))){
      res.status(400).send("Missing id or type");
  } else {
    if(req.body.type == 'contributor'){
      mongo.contributorLikeAdd(req.body.id, req.body.user,
        function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else if(req.body.type == 'spectator'){
      mongo.spectatorLikeAdd(req.body.id, req.body.user, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else {
      res.status(400).send("type must be 'contributor' or 'spectator'");
    }
  }
}

//take in project id, like type (contributor or spectator), and liker
mongoRoutes.posts['/api/data/likes/delete'] = function(req, res) {
  if(!(req.body.hasOwnProperty('id')) ||
    !(req.body.hasOwnProperty('type')) ||
    !(req.body.hasOwnProperty('user'))){
      res.status(400).send("Missing id or type");
  } else {
    if(req.body.type == 'contributor'){
      mongo.contributorLikeDelete(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else if(req.body.type == 'spectator'){
      mongo.spectatorLikeDelete(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else {
      res.status(400).send("type must be 'contributor' or 'spectator'");
    }
  }
}


//take in project name, author, description, proposed solution
mongoRoutes.posts['/api/data/ideas/add'] = function(req, res) {
  if(!(req.body.hasOwnProperty('name')) ||
    !(req.body.hasOwnProperty('author')) ||
    !(req.body.hasOwnProperty('description')) ||
    !(req.body.hasOwnProperty('solution'))){
      res.status(400).send("Missing name, author, description, or solution");
    } else {
      var spectatorLikeList = req.body.spectatorLikeList || [];
      var numSpectatorLikes = req.body.numSpectatorLikes || 0;
      var contributorLikeList = req.body.contributorLikeList || [];
      var numContributorLikes = req.body.numContributorLikes || 0;
      var image_id = req.body.imageId || 0;

      mongo.projectCreate(req.body.name, req.body.author, req.body.description,
        req.body.solution, spectatorLikeList, numSpectatorLikes,
        contributorLikeList, numContributorLikes, image_id, function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    }

}

//take in project id
mongoRoutes.posts['/api/data/ideas/delete'] = function(req, res) {

}

//search for projects
//if not advanced, call basic search function to search across all fields
//if advanced, call advanced search function
mongoRoutes.posts['/api/data/ideas/search'] = function(req, res) {
  if(!(req.body.hasOwnProperty("searchterm"))){
    res.status(400).send("No searchterm specified");
  } else {
    if(req.body.advanced) {
      mongo.projectSearchAdvanced(req.body.id, req.body.name, req.body.author,
        req.body.description, req.body.solution, req.body.searchterm,
        function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.json(data);
        }
      });
    } else {
      mongo.projectSearchBasic(req.body.searchterm, function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.json(data);
        }
      });
    }
  }
}

//update project field(s): id, project name, author, description, solution, likes, contributor likes
mongoRoutes.posts['/api/data/ideas/update'] = function(req, res) {

}
