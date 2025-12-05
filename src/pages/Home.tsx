const Home = () => {
    return (
        <main className="flex flex-row">
            <div className="bg-c2 flex-3 flex flex-col items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}images/profile_picture.jpg`} className="w-50 h-50 rounded-full object-cover"/>
                <div className="font-bold mt-5">Raphael Lam</div>
                <div className="mt-5">Project Civil Engineer</div>
            </div>
            <div className="flex-4 m-3  font-content">
                <p className="mb-3 p-3">
                    As a dedicated Project Civil Engineer with over 15 years of professional experience, I specialize in the comprehensive design, management, and construction oversight of infrastructure projects including bridges, water dams, and commercial and residential buildings. Throughout my career, I have successfully contributed to all phases of project delivery from initial feasibility studies and detailed design through to construction supervision and final handover, ensuring projects meet strict safety, quality, and regulatory standards.
                </p>
                <p className="mb-3 p-3">
                    My expertise encompasses structural analysis and design for bridges, where I have applied advanced engineering principles to deliver durable, safe, and cost-effective solutions tailored to complex site conditions and client requirements. In water dam projects, I have been involved in hydrological studies, stability assessments, and the design of sustainable water retention and flood control structures that balance environmental impact with structural integrity. Additionally, I have managed building design and construction projects with a focus on integrating architectural, mechanical, and civil disciplines to optimize functionality and efficiency.
                </p>
                <p className="mb-3 p-3">
                    Committed to continuous professional development, I stay updated with the latest engineering codes, standards, and innovations to ensure robust and forward-looking infrastructure solutions. My goal is to leverage my technical expertise, practical experience, and leadership skills to contribute positively to the development of sustainable and resilient infrastructure that enhances community safety and quality of life.
                </p>

            </div>
        </main>
    );
};

export default Home;