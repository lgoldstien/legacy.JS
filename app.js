function Dialogue(title,contents,buttons) {

    var Title;
    var Contents;
    var Buttons;

    /** Setters */
    function SetTitle(){

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