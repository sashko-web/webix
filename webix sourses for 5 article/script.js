
webix.ui({
    rows:[
        header,
        {
            cols:[
            aside, {view: "resizer"}, multi
            ]
        },
        footer
    ]
});


// $$("mylist").select("users");

$$("chart").sync($$("user_list"));

