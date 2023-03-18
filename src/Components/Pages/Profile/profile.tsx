import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="https://altecsystems.ru/local/templates/altecsystems/images/about-history-2-large.webp"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">Vasiliy Konovalov</h2>
        <p className="profile-description">Front-end Developer</p>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h3 className="profile-section-title">Contact Information</h3>
          <ul className="profile-list">
            <li className="profile-list-item">
              Email: konovalov.vasiliy97@yandex.ru
            </li>

            <a href="https://t.me/kebab_case" className="profile-list-item">
              Telegram:
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Vasiliy avatar"
                width={25}
              />
            </a>

            <li className="profile-list-item">Address: Ekaterinburg</li>
          </ul>
        </div>
        <div className="profile-section">
          <h3 className="profile-section-title">Hard skills</h3>
          <ul className="profile-list">
            <li className="profile-list-item">HTML/CSS</li>
            <li className="profile-list-item">JavaScript</li>
            <li className="profile-list-item">React</li>
            <li className="profile-list-item">Typescript</li>
            <li className="profile-list-item">MobX</li>
            <br />
            <h3 className="profile-section-title">Soft skills</h3>
            <li className="profile-list-item">English B2</li>
            <li className="profile-list-item">Scrum</li>
            <li className="profile-list-item">
              SOLID principles understanding
            </li>
            <li className="profile-list-item">Easy-going</li>
            <li className="profile-list-item">
              Aspiration to self-developing. By the way I like to read books by
              Brian Tracy
            </li>
            <li className="profile-list-item">
              Also like fitness and football, play tennis, swimming and another
              sport
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
