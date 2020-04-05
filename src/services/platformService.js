export const divideZoomUrl = url => {
    const myRegexp = /zoom.us\/j\/(\w+)(\?pwd=(.*))*/;
    const platformArr = myRegexp.exec(url);

    return {
        platform_media_id: platformArr ? platformArr[1] : null,
        platform_media_pwd: platformArr ? platformArr[3] : null
    };
};

export const importZoomUrl = (id, pass=null) => `https://zoom.us/j/${id}${pass ? '?pwd='+pass : ''}`;