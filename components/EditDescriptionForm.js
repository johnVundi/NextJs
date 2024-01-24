export default function EditDesriptionForm(){
    return(
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo title"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo Description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Photo Description</button>
    </form>
    )
}