function changeActiveBox(nomor) {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove(
            "bg-[#12C237]", "h-[363px]", "flex", "flex-col", "justify-between",
            "hover:bg-[#17D64A]"  // Hapus efek hover saat tidak aktif
        );
        box.classList.add("bg-[#151F2C]", "h-[300px]", "transition-all", "duration-300");
        box.setAttribute("data-active", "false");
        box.querySelector('.deskripsi')?.remove();
        box.querySelector('.tombol')?.remove();
    });

    const activeBox = document.getElementById(`box-${nomor}`);
    activeBox.classList.remove("bg-[#151F2C]", "h-[300px]");
    activeBox.classList.add(
        "bg-[#12C237]", "h-[363px]", "flex", "flex-col", "justify-between",
        "hover:bg-[#17D64A]"  // Tambahkan efek hover khusus saat aktif
    );
    activeBox.setAttribute("data-active", "true");

    const dsc = document.createElement("p");
    dsc.className = "deskripsi text-[16px] text-white";
    dsc.innerText = nomor === 1 ? "Ini Deskripsi 01" : nomor === 2 ? "All accommodation, food, and destination facilities included in our package are included in the listed price" : "Ini Deskripsi 03";
    activeBox.appendChild(dsc);

    const tmbl = document.createElement("p");
    tmbl.className = "tombol flex gap-10 text-[18px] text-white items-center";
    tmbl.innerHTML = "<p>Learn More</p><i class='fa-solid fa-chevron-right'></i>";
    activeBox.appendChild(tmbl);
}

//

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3.2
            }
        }
    })
} )

const trips = document.querySelectorAll('[data-trip]');

function activeTrip(tripNumber) {
    trips.forEach((trip) => { 
        const circle = trip.querySelector(".trip-circle");
        const innerCircle = trip.querySelector(".trip-circle div"); 
        const text = trip.querySelector(".trip-text");

        if (trip.getAttribute("data-trip") === tripNumber.toString()) { 
            circle.classList.remove("bg-[#D9D9D9]");
            circle.classList.add("bg-[#5CB26E]");
            innerCircle.classList.remove("hidden");
            text.classList.remove("text-[#ffffff80]");
            text.classList.add("text-[#5CB26E]");
        } else {
            circle.classList.remove("bg-[#5CB26E]");
            circle.classList.add("bg-[#D9D9D9]");
            innerCircle.classList.add("hidden");
            text.classList.remove("text-[#5CB26E]");
            text.classList.add("text-[#ffffff80]");
        }
    });
}

trips.forEach((trip) => {
    trip.addEventListener("click", () => {
        activeTrip(trip.getAttribute("data-trip"));
    });
});

activeTrip("1");

const dayTrip = document.querySelectorAll(".days");
const listTrip = Array.from(dayTrip);
const tmblTrip = document.getElementById("tmblTrip");

listTrip.forEach((lt) => {
    lt.addEventListener("mouseover", () => {
        tmblTrip.classList.remove("hidden");
        tmblTrip.classList.add("flex");

        const index = listTrip.indexOf(lt);
        tmblTrip.classList.remove("top-[0px]", "top-[125px]", "top-[250px]", "top-[375px]");
        if (index == 1) {
            tmblTrip.classList.add("top-[125px]");
        } else if(index == 2) {
            tmblTrip.classList.add("top-[250px]");
        } else if(index == 3) {
            tmblTrip.classList.add("top-[375px]");
        } else {
            tmblTrip.classList.add("top-[0px]");
        }
    });

    lt.addEventListener("mouseout", () => {
        tmblTrip.classList.remove("flex");
        tmblTrip.classList.add("hidden");
    });
});

// Hamburger 
const menuButton = document.getElementById("tombol");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Toggle menu saat tombol hamburger diklik
menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("translate-x");
    mobileMenu.classList.toggle("translate-x-0");
});

// Tutup menu saat tombol close diklik
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x");
    mobileMenu.classList.remove("translate-x-0");
});