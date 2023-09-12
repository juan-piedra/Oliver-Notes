

const DisplayNotes = () => {
    const getNotes = [
        { _id: 1, price: '$10', pdf: 'https://cdn.vox-cdn.com/thumbor/WjL9fX19Cn5Dq9EujpEDbaIAx0U=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18277139/GettyImages_577660404.jpg', comments: [{ text: 'testing1', uploadDate: "10/10/2010" }, { text: 'testing2', uploadDate: "10/20/2010" }], publisherId: [{ username: "Gene" }], uploadDate: "10/31/2023", voteCount: 5 },
        { _id: 2, price: '$20', pdf: 'https://cdn.vox-cdn.com/thumbor/WjL9fX19Cn5Dq9EujpEDbaIAx0U=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18277139/GettyImages_577660404.jpg', comments: [{ text: 'testing3', uploadDate: "10/10/2010" }, { text: 'testing4', uploadDate: "10/30/2010" }], publisherId: [{ username: "Juan" }], uploadDate: "11/01/2023", voteCount: 6 },
        { _id: 3, price: '$30', pdf: 'https://cdn.vox-cdn.com/thumbor/WjL9fX19Cn5Dq9EujpEDbaIAx0U=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18277139/GettyImages_577660404.jpg', comments: [{ text: 'testing3', uploadDate: "10/10/2010" }, { text: 'testing5', uploadDate: "10/31/2010" }], publisherId: [{ username: "Tod" }], uploadDate: "11/10/2023", voteCount: 10 },]

    return (
        <div>
            {getNotes && getNotes.map((note) => (
                <div key={note._id}>
                    <h1 className="py-5">testing: {note.price}</h1>
                    {/* since we are using map here, it will autogenerate a div for each note from getNotes*/}
                </div>
            )

            )}


        </div >


    )
}

export default DisplayNotes;