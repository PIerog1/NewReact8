function AvatarList({ users }) {
  return (
    <div className="avatar-list">
      {users.map((user) => (
        <div key={user.id} className="avatar-card">
          
          <img
            src={`https://i.pravatar.cc/60?u=${user.id}`}
            alt={user.name}
            className="avatar"
          />

          <div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default AvatarList;