// inject navbar
$(document).ready(function () {

    // navbar html
    var navbar = `
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">UCode</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>`;

    // inject to 'navbar' in index.html
    $("#navbar").html(navbar);
    console.log("ready")
});
