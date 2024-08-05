import template from "../template.js";


export default async function rudeText(req, res) {


    let configgers = {
        "text": req.query.text || "Default text. You better set it to something lol.",
        "text_color": req.query.text_color || "FFFFFF",
        "animation": req.query.anim_name || "fall",
        "delay": req.query.delay || 0,
        "font": req.query.font || "Segoe UI",
        "font_size": req.query.font_size || 16,
        "anchor": req.query.anchor || "start",
        "iteration_count": req.query.iteration_count || -1,
        "duration": req.query.duration || 0.5,
    }

    configgers["width"] = req.query.width || configgers.font_size*configgers.text.length/2;
    configgers["height"] = req.query.height || configgers.font_size*1.5;

    let anims_repeating = ["rainbow"]
    let anims_onetime = ["fall"]


    let anims = anims_repeating.concat(anims_onetime);

    if (!anims.includes(configgers["animation"]))
    {
        configgers["animation"] = "fall";
    }

    let anim_repeats = anims_repeating.includes(configgers["anim_name"])

    if (configgers["iteration_count"] == -1) {
        configgers["iteration_count"] = anim_repeats ? "infinite" : 1;
    }

    let resp = template(configgers);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(resp);

}

