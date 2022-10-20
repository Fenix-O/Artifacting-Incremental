<script>
var artifracts = 0;

function artiClick(number){
    artifracts = artifracts + number;
    document.getElementById("artifracts").innerHTML = artifracts;
&rbrace;

var artifacts = 0;

function buyArtifact(){
    var artifactCost = Math.floor(10 * Math.pow(1.1,artifacts));   //works out the artifact's cost
    if(artifracts &gt;= artifactCost)(     //checks that the player can afford the artifact
        artifacts = artifacts + 1;      //increases number of artifacts
        artifracts = artifracts - artifactCost;      //removes the artifracts spent
        document.getElementById('artifacts').innerHTML = artifacts;    //updates the number of artifacts for the user
        document.getElementById('artifracts').innerHTML = artifracts;    //updates the number of artifracts for the user
    )
    var nextCost = math.floor(10 * Math.pow(1.1,artifacts));        //works out the cost for the next artifact
    document.getElementById('artifactCost').innerHTML = nextCost;   //updates the artifact cost for the user
}

window.setInterval(function(){
    console.log(artifracts);
    artiClick(artifacts);

};, 1000);
</script>