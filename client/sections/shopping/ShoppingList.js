Template.ShoppingList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
  recipes: function() {
    return Recipes.find({
      inMenu: true
    });
  }
});