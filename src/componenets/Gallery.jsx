const Gallery = () => {
  return (
    <div id="gallery" className="m-auto w-full max-w-[1140px] px-4 py-16">
      <h2 className="p-4 text-center text-gray-700">Gallery</h2>
      <div className="grid gap-4 sm:grid-cols-5 ">
        <div className="col-span-2 row-span-2 sm:col-span-3">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1672509995777-ede97d83c304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvbGlkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
            className="h-full w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1682036081816-8448a44a7cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvbGlkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1517176191003-46c068487dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvbGlkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>

        <div>
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvbGlkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
