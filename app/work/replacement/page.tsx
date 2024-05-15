import React from 'react';
import ReplacementCarousel from '@/components/ReplacementCarousel';

export default function About() {
  return (
    <main>
      <h1
        style={{
          fontSize: '40px',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '100px',
          marginBottom: '30px',
        }}
      >
        replacement
      </h1>
      <ReplacementCarousel />

      <div style={{ justifyContent: 'center', display: 'flex' }}></div>
      <p
        style={{
          textAlign: 'left',
          width: '70%',
          height: 'auto',
          margin: 'auto',
          marginTop: '80px',
          marginBottom: '150px',
        }}
      >
        We’re obsessed with INSTAGRAM! Among us, I manage 4 accounts, Sara
        oversees 5, and Hope curates 3. As for Yumiko, she’s in a league of her
        own with 8 accounts.
        <br />
        <br />
        What sets each account apart? I can’t say for certain. By simply
        creating new profiles, I have the liberty to construct identities for
        someone named &apos;Yifan,&apos; whether or not you know them in real
        life. I can mold Yifan into an ambitious photographer with a penchant
        for the arts, a run-of-the-mill student blending into the campus
        scenery, or a social media enthusiast flooding feeds with 10 stories a
        day, documenting every facet of life. It’s not about who Yifan truly is
        or what they’re capable of, but rather, through this cyber persona, this
        is the Yifan I choose to present to you.
        <br />
        <br />
        Cyber identity isn’t confined to screens; it has supplanted the
        &apos;existing impressions&apos; we hold in the memories of others. The
        image of &apos;You&apos; has been obscured, dismantled, and
        reconstructed, replaced by the intentional identities we assume.
        &quot;Replacement&quot; delves into how the cyber world has supplanted
        our authentic identities, weaving alternate narratives.
      </p>
    </main>
  );
}
