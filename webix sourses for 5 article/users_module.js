
const users = {
    rows:[
        {
            cols:[
                { 
                view:"button", 
                id:"btn_add_person", 
                value:"Add new person", 
                width:150, css:"webix_primary", 
                click:addPerson
                },
                {}
            ]
        },
        {
            view: "editlist",
            editable:true,
            editor:"text",
            editValue:"name",
            id:"user_list",
            select:true,
            url:"data/users.js",
            template:"#name# from #country# <span class='webix_icon wxi-close'></span> ",
            onClick:{
                webix_icon(e, id){
                    this.remove(id);
                    return false;
                }
            }
        },
        {
            view:"chart",
            id:"chart",
            type:"bar",
            value:"#age#",
            xAxis:{
                template:"#age#",
                title:"Countries"
            }
        }
    ]
}

webix.protoUI({
    name:"editlist"
}, webix.EditAbility, webix.ui.list);

