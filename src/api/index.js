import template from "../template.js";


export default async function rudeText(req, res) {


    let configgers = {
        "text": req.query.text || "Default text. You better set it to something lol.",
        "text_color": req.query.text_color || "FFFFFF",
        "animation": req.query.anim_name || "fall",
        "delay": req.query.delay || 0,
        "font": req.query.font || "Segoe UI",
        "font_size": req.query.fontsize || 16
    }

    let anims = ["fall"]

    if (!anims.includes(configgers["animation"]))
    {
        configgers["animation"] = "fall";
    }

    let resp = template(configgers);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(resp);

}

