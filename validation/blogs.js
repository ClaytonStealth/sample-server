const validateBlogData = (blogData) => {
if(blogData.title === undefined || blogData.title.length > 40){
    
const nonStringTracker = blogData.title.filter((blogs)=>{
    if (typeof(blogs)!== 'string'){
        return true
    } else {
        return false
    }
})

if (nonStringTracker > 0){
    return {
        isValid: false,
        message: "NEEDS to be a STRING"
    }
}
    
    return{
        isValid: false,
        message: "Title IS required and NEED to be a string"
    }
}
if(blogData.text=== undefined) {
    
const nonStringTracker = blogData.text.filter((blogs)=>{
    if (typeof(blogs)!== 'string'){
        return true
    } else {
        return false
    }
})

if (nonStringTracker > 0){
    return {
        isValid: false,
        message: "NEEDS to be a STRING"
    }
}
    
    
    return{
        isValid: false,
        message: "Text IS required and NEED to be a string"
    }
}

if(blogData.author === undefined || blogData.author.length > 40){
    
const nonStringTracker = blogData.author.filter((blogs)=>{
    if (typeof(blogs)!== 'string'){
        return true
    } else {
        return false
    }
})

if (nonStringTracker.length > 0){
    return {
        isValid: false,
        message: "NEEDS to be a STRING"
    }
}
    
    return{
        isValid: false,
        message: "Author IS required and NEED to be a string"
    }
}


const nonStringTracker = blogData.filter((blogs)=>{
    if (typeof(blogs)!== 'string'){
        return true
    } else {
        return false
    }
})

if (nonStringTracker > 0){
    return {
        isValid: false,
        message: "NEEDS to be a STRING"
    }
}

return{
    isValid: true
}


}

module.exports = {
    validateBlogData
}