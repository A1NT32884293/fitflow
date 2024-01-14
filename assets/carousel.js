<script>
$(document).ready(function(){
    $("#myCarousel").on("slid.bs.carousel", function(){
        alert("The sliding transition of previous carousel item has been fully completed.");
    }); 
});
</script>
PREVIOUS PAGE