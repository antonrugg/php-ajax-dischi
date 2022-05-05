const app = new Vue({
    el: '#app',
    data() {
        return{
            discs: [],
        }
    },
    mounted() {
        axios.get('http://localhost/php-ajax-dischi/data/data.php').then((response) => {
            console.log(response);
            if (response.status === 200) {
                this.discs = response.data;
            }
        }).catch(error => console.log(error));
    }

    
})



// author: "Bon Jovi"
// genre: "Rock"
// poster: "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
// title: "New Jersey"
// year: "1988"

