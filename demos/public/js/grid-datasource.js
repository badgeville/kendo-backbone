$(function(){

  var memeCollection = new Backbone.Collection([
    { id: 1, name: "spring cleaning", url: "/images/memes/28067008.jpg" },
    { id: 2, name: "like a boss", url: "/images/memes/CatLikeaBoss.jpg" },
    { id: 3, name: "infinite high five", url: "/images/memes/high-fives.gif" },
    { id: 4, name: "eval is evil", url: "/images/memes/JavaScriptEval.jpg" },
    { id: 5, name: "mind blown", url: "/images/memes/mind_blown.gif" },
    { id: 6, name: "facepalm", url: "/images/memes/picard-facepalm.jpg" },
    { id: 7, name: "things that make you go, 'hmmmmmmm'", url: "/images/memes/thingsThat.png" },
    { id: 8, name: "epic thumbs up is epic", url: "/images/memes/ChuckNorrisThumbsUp.gif" }
  ]);

  memeCollection.on("add", function(model){
    console.log("added a model:", model.get("name"), model.get("url"));
  });

  $(".grid").kendoGrid({
    dataSource: new kendo.Backbone.DataSource({
      collection: memeCollection,
      schema: {
        model: {
          fields: {
            url: "string",
            name: "string",
            preview: "string"
          }
        }
      },
      autoSync: false
    }),

    columns: [
      {
        title: "Preview",
        editor: showImagePreview,
        template: "<img src='#= url #' width='100'>",
        field: "preview"
      },
      {
        title: "Name",
        field: "name",
      },
      {
        title: "URL",
        field: "url"
      },
      { command: ["edit", "destroy"] }
    ],
    toolbar: ["create"],
    editable: "popup"
  });

  function showImagePreview(container, options){
    var imagePreview = $("<img width='100' data-bind='attr: {src: url}'>");
    kendo.bind(imagePreview, options.model);
    container.append(imagePreview);
  }

});

