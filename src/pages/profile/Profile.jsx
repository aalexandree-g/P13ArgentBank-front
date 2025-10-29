import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { accounts } from '../../mockData/accounts'
import { setProfile } from '../../store/userSlice'
import { updateUserProfile } from '../../services/api'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Profile = () => {
  const dispatch = useDispatch()
  const { token, profile } = useSelector((state) => state.user)
  const [firstName, setFirstName] = useState(profile?.firstName || '')
  const [lastName, setLastName] = useState(profile?.lastName || '')
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setFirstName(profile.firstName)
    setLastName(profile.lastName)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      const updatedData = await updateUserProfile(token, {
        firstName,
        lastName,
      })
      dispatch(setProfile(updatedData.body))
      setIsEditing(false)
    } catch (error) {
      console.error('Erreur de mise à jour du profil :', error)
      alert('Impossible de mettre à jour votre profil')
    }
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            {!isEditing && (
              <>
                <br />
                {profile.firstName} {profile.lastName} !
              </>
            )}
          </h1>
          {!isEditing ? (
            <>
              <button className="header__edit-button" onClick={handleEditClick}>
                Edit Name
              </button>
            </>
          ) : (
            <form className="edit-form" onSubmit={handleSave}>
              <div className="edit-form__fields">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <div className="edit-form__buttons">
                <button type="submit" className="header__edit-button">
                  Save
                </button>
                <button
                  type="button"
                  className="header__edit-button header__edit-button--cancel"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <section key={account.id} className="account">
            <div className="account__content">
              <h2 className="account__title">{account.title}</h2>
              <p className="account__amount">{account.amount}</p>
              <p className="account__description">{account.description}</p>
            </div>
            <div className="account__content cta">
              <button className="account__transaction-button">
                View transactions
              </button>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default Profile
