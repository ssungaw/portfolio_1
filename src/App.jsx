import './Profile.css'

const interests = ['음악', '책', '영상']

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문 바로가기</a>
      <header className="site-header">
        <a className="site-logo" href="#home" aria-label="KANI 소개 페이지 맨 위로">
          <span aria-hidden="true">♥</span> KANI의 작은 소개
        </a>
        <nav aria-label="페이지 메뉴">
          <a href="#interests">좋아하는 것</a>
          <a href="#strengths">나의 장점</a>
          <a href="#activities">활동과 작품</a>
          <a href="#goals">나의 목표</a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">✿</span> 나를 소개합니다</p>
            <h1 id="hero-title">카카카니<br />어서 와, 난 <span>KANI</span>!</h1>
            <p className="hero-intro">음악과 책, 영상을 좋아하고<br />좋아하는 영화를 더 많이 찾아보고 싶어요.</p>
            <a className="button" href="#interests">KANI에 대해 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-heart">♥</span>
            <span className="hero-star">✦</span>
            <span className="hero-flower">✿</span>
            <div className="hero-note">오늘도<br />좋아하는 것과 함께!</div>
          </div>
        </section>

        <section className="content-section interests-section" id="interests" aria-labelledby="interests-title">
          <div className="section-wrap">
            <p className="eyebrow">01 · 내가 좋아하는 것</p>
            <h2 id="interests-title">요즘 좋아하는 것들</h2>
            <p className="section-lead">내가 관심을 가지고 즐기는 것들이에요.</p>
            <ul className="interest-list">
              {interests.map((interest, index) => (
                <li className={`interest-card interest-card-${index + 1}`} key={interest}>
                  <span className="interest-number">0{index + 1}</span>
                  <span className="interest-name">{interest}</span>
                  <span className="interest-spark" aria-hidden="true">{['♫', '✿', '▶'][index]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section strengths-section" id="strengths" aria-labelledby="strengths-title">
          <div className="section-wrap">
            <p className="eyebrow">02 · 내가 잘하는 것</p>
            <h2 id="strengths-title">나의 장점과 도전</h2>
            <div className="strength-grid">
              <article className="info-card">
                <span className="card-icon" aria-hidden="true">💬</span>
                <h3>내가 잘하는 것</h3>
                <p>말하기</p>
              </article>
              <article className="info-card">
                <span className="card-icon" aria-hidden="true">🎬</span>
                <h3>더 해보고 싶은 것</h3>
                <p>영화 감상</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section activities-section" id="activities" aria-labelledby="activities-title">
          <div className="section-wrap">
            <p className="eyebrow">03 · 나의 경험</p>
            <h2 id="activities-title">활동과 작품</h2>
            <div className="empty-work">
              <span aria-hidden="true">✧</span>
              <h3>여기에 나의 이야기를 더해 볼 거예요</h3>
              <p>소개하고 싶은 활동이나 작품이 생기면 이곳에 사진과 함께 추가할 수 있어요.</p>
            </div>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goals-title">
          <div className="section-wrap goal-content">
            <p className="eyebrow">04 · 앞으로의 나</p>
            <h2 id="goals-title">나의 목표</h2>
            <p className="goal-text">좋아하는 영화를<br /><span>많이 보기!</span></p>
            <span className="goal-decoration" aria-hidden="true">♥</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>좋아하는 것들을 하나씩 모아가는 KANI의 이야기</p>
        <a href="#home">맨 위로 ↑</a>
      </footer>
    </>
  )
}

export default App
