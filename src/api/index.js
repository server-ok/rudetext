async function rudeText(req: any, res: any) {

    let text = req.query.text;

    let configgers = {
        "text_color": req.query.text_color || "FFFFFF",
        "animation": req.query.anim_name || "fall"
    }

    let anims = ["fall"]

    if (!anims.includes(configgers["animation"]))
    {
        configgers["animation"] = "fall";
    }

    res.send(configgers);

}

