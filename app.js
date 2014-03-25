function App(){
    return {
        assert: function(a, b, message) {
            if (a !== b) {
                throw message || "Assertion Failed";
            }
        }
    }
}

function Dialogue(title,contents,buttons){

    var Title;
    var Contents;
    var Buttons;
    var ID;
    var app = new App();

    /** Setters */
    function SetTitle(title){
        Title = title;
        app.assert(Title, title, "Title not set correctly.");
    }
    function SetButtons(){

    }
    function SetContents(){

    }
    function SetID(){

    }

    /** Getters */
    function GetTitle(){

    }
    function GetButtons(){

    }
    function GetContents(){

    }
    function GetID(){

    }

    /** Functionals */
    function Init(){
        SetTitle(title);
        SetContents(contents);
        SetButtons(buttons);
        SetID();
    }

    Init();

    /** Publicly Exposed Methods */
    return {
        show: function(){
            alert("Showing Dialogue");
        },
        hide: function(){
            alert("Hiding Dialogue");
        }
    }
}

var dialogue = new Dialogue("Help", "Some random help text", ["close", "ok", "cancel"]);