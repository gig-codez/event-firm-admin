import firebase from "firebase-admin";
import teammodel from "../models/teammodel.js";
import leaguemodel from "../models/leaguemodel.js";
import playersmodel from "../models/playersmodel.js";
/***
 * 
 */
const fileStorageMiddleware = async (req) => {
    // Upload the image to Firebase Storage
    const bucket = firebase.storage().bucket();
    const file = bucket.file(`samba/${req.body.action}/${req.file.originalname}`);
    const metadata = {
        contentType: req.file.mimetype,
    };
    await file.save(req.file.buffer, {
        metadata: metadata,
    });
    // get signed image url
    const imagePath = await file
        .getSignedUrl({
            action: 'read',
            expires: '03-09-3024', // Replace with an appropriate expiration date
        });
    return imagePath[0];

};
export default fileStorageMiddleware;