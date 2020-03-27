class SessionData
{
    /// TODO : add typescript to project and uncomment var types
    constructor(obj)
    {
        this.id=obj.id;
        this.username=obj.username;
        this.name=obj.name;
        this.description=obj.description;
        this.category=obj.category;
        this.category=obj.category;
        this.resession_id=obj.resession_id;
        this.tags=obj.tags;
        this.start_date=obj.start_date;
        this.end_date=obj.end_date;
        this.capacity=obj.capacity;
        this.attendees=obj.attendees;
        this.platform=obj.platform;
        this.platform_video_id=obj.platform_video_id;
        this.img_id=obj.img_id
    }
    id //: number;
username //:string
name //: String
description //: String, Nullable
category //:Category
resession_id //string ?
tags //: String[]
start_date //: Date
end_date //: Date
capacity //: number
attendees //: Uint
platform //: string
platform_video_id //: String
img_id //: String

}

export default SessionData;