
let clearForm = () => {
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then(
        function(){
            $$("film_form").clear();
            $$("film_form").clearValidation();
        }
)};
