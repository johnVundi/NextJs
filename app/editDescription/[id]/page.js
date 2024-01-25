import EditDescriptionForm from "@/components/EditDescriptionForm";

const getPhotoById = async(id)=>{
    try {
        const res = await fetch(`http://localhost:3000/api/photos/${id}`,{
            cache: "no-store"
        });
        if(!res.ok){
            throw new Error("Failed to fetch topic")
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function editDescription({params}) {
    const {id} = params;
     const {photo} = await getPhotoById(id);
    const {description} = photo;
    return(
        <EditDescriptionForm id={id} description={description} />
    )
}







