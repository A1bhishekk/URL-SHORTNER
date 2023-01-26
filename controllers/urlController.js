import URL from "../models/urlSchema.js";
import shortid from "shortid";

export const generateNewShortID = async (req, res) => {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})

    const shortID=shortid()

    await URL.create({
        shortID:shortID,
        redirectURL:body.url,
        visitHistory:[]
    })

    return res.status(201).json({message:"Short Url Genrated Successfully",id:shortID,url:`https://abhiurl.vercel.app/url/${shortID}`})
}

export const redirectURL=async(req,res)=>{
    const shortID=req.params.shortID
    // console.log(shortID)
    const entry=await URL.findOneAndUpdate({shortID},{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })

    res.redirect(entry.redirectURL)
}

export const getAnalytics=async(req,res)=>{
    const shortID=req.params.shortID
    const result=await URL.findOne({shortID})

    return res.json({
        totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })

}