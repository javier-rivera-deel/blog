$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("P4a5yjkc8gvRTRRXO8R1topt1BnyELNzqYqqZa7F", "IsGGvsswxBV3zeaW7QLgXvFmnsBf525qKZ9HkoX6");
 
    var Blog = Parse.Object.extend("Blog");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}).then(function(object) {
    //   alert("yay! it worked");
    // });
	var Blogs = Parse.Collection.extend({
		model : Blog
	})

	var blogs = new Blogs();

	blogs.fetch({
		success: function(blogs){
			console.log(blogs);
		},
		error: function(blogs, error){
			console.log(error);
		}
	})
 
});