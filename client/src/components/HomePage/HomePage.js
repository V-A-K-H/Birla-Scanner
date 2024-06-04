import {React, useState, useEffect} from 'react';
import './HomePage.css';
import {Link, NavLink, Navigate, redirect, useNavigate} from 'react-router-dom';
import {API} from '../../config';
import Loader from '../MainComponents/Loader/Loader';
import SignUp from '../SignUp/SignUp';
import Navbar from '../MainComponents/Navbar/Navbar';
import QrGenerator from '../AdminProfile/Admin/QrGenerator';
import {AdminRoute} from '../PrivateRoute';

const HomePage = () => {
  let whoUse = localStorage.getItem('Auth');
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [purpose, setPurpose] = useState();
  const [load, setLoad] = useState(false);
  let admin = false;
  const fetchData = async () => {
    console.log(localStorage.getItem('sessionUser'));
    try {
      setLoad(false);
      const result = await fetch(
        `${API}/StudentInfo/columns/name phonenum year access photolink`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('sessionUser'),
          },
        },
      );
      const response = await result.json();

      setUserData(response);
    } catch (err) {
      console.log(err);
      redirect('/signup');
    }
    setLoad(true);
  };
  console.log(whoUse);

  useEffect(() => {
    whoUse = localStorage.getItem('Auth');
    setTimeout(() => {
      fetchData();
      setLoad(true);
    }, 1125);
  }, [whoUse]);

  if (whoUse == 'admin') {
    return <AdminRoute element={<QrGenerator />} />;
  }
  if (whoUse == null) return navigate('/signup');
  if (!load || !userData)
    return (
      <>
        <Loader />
      </>
    );
  if (userData.access) {
    navigate('/qrscanner');
  }
  return (
    <>
      <body className="homebody">
        <Navbar />
        <div className="container0">
          <div className="profile">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={userData.photolink}
                    alt=""
                    style={{height: '300px', width: '300px'}}
                  />
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="textbox"
            placeholder="Purpose"
            value={purpose}
            onChange={e => {
              setPurpose(e.target.value);
            }}
          />

          <button
            disabled={purpose ? false : true}
            style={{backgroundColor: purpose ? '#0B2447' : 'black'}}
            className="buttonqr">
            <Link to="/qrscanner" state={{purpose: purpose}}>
              {' '}
              Open QR Scanner
            </Link>
          </button>
        </div>
        <div className="footer">
          <div class="container1">
            <div className="footer-cta pt-5 pb-5">
              <div className="row">
                <div className="col-xl-12 col-lg-12 mb-50">
                  <div className="footer-widget">
                    <div className="companyinfo">
                      <div className="footer-logo">
                        <img
                          src="https://lh3.googleusercontent.com/pw/AP1GczPan6hXcdUxOqP3DdJXZnL2RI0ZIQwVjEPPKAvTt00q8xrfa3PcCl4ll1flvYwO4HsbCy8p6ZgbhC7NdgnZz_a6_r7_CBN7kiKi_ITO6eRGzt_rGmbGjEPsdGh8LEEOs6HjnIooCrDlNrmZjrhcdBmDfAddR7kxMGN6H4vfjfObt68qViJ9_xtaxqAHOEkH3OMm72FNox4wB8u9ptDZmvX76OHjewTimLCpN_PfATGwINBhrsRTYOAlhss6eIVYd3CIcilJ9oeCHqiTfYYPKI2BpdQjFxo7ft-vwEZLDOfA2Tt3WNsX2CHWM-dZVMQR-U-dRPFeUMr6_ZPhJctofG_6WbEMMtKEnd-mo9CnvVEs5U94UYes1x0Gzkl1kmb3hHjzaqIqULWSdbVu3_S_UEknp0eXyYEC1EcZeNLPMlvkPQ-7yj1xyFvnKYSZ0vFFBAvuJkHVgO3btBoRCT_1XhPxJTo3jyjw2RuOGkFKP88UWqmwoujQadJiahMl6t3gPQIfR_gijzGvYHfn9hTR_zEjNcR4Pvs2bRcPaic63okTtcZdqaf95xNh5aAOqbLK7zDZPoN_Pg5Ayyj3_fHK8h4c9Ojz9Q-8xxKPZKzq2PztQXKqGQSS3QxZN64BbHCvEb3WICEzVAop8rnHv1RhYxndMQFsElF5Tt1q3ZTCJuTtnNUZ8NgcCSq3GoPaGtp0aq2NSZsbMoQhiBTEF7VG8qAyOi-rFlGe_1SmBTXLJy4on103NjxFa3Qv7nHge9qPD95Rwc37_Yf6qhdksDjVBFydx4u7hxrmZEKekMJ_5IHCAjcDIRdciQVNPSnyRjwUoiCvNx-_VrK03sA2SLYeLTam37phpfVNxwB4JFKaYBnIBct7QXbvYszfTykQywm7vssaWE-V_2OYKpxcu-mBbgwN=w954-h913-s-no-gm?authuser=0"
                          className="img-fluid"
                          alt="logo"
                        />
                        <img
                          src="https://lh3.googleusercontent.com/pw/AP1GczMLF_FfTulLlY4KcxOZdcfIiYXyCFnxm1AXXS3HScoLZP7pXjH8ENl0fzQliTQLJzRJg8YXpxSwCeZ5ze6vJOTIUtm8XXFDVvjzDUfvxSUB1CwLLAy8e9fwBBLqfq6yj6Xc5Fh8je28_nKWWVNL_bo8dpADR3NWhzUBdyXtHYaJLGdMpC6Ik0t9ztAvLSoZ3pAESjCgGHmsmQulG9-zuvNTsPWuaHLOhaLF64HXJcFseU1x6pPtCRWLpSPDm-YV0pYfVXgKx7q7s-VDVNgeW4VeyyChtRQzQx2_PG0uZm0ALjQj_WH6Ac7ZhZLHIFvaci-sFBeMGmrrf-06haP_paI6PRoMsvZgfuKayHkyYPc4gkR8sNtsLtcm94zGCwD-FP7bqc3kH8X__0i9Gw3f0PWIxNMiD7gDJbbx_Nq4iwDAoA2ANibboY0glGiUMEMaNaa1K2A9URTv8sOanawzBTUYaYCNqZEKu-euLGIuENf4WGGHIxCuBZfAnATPKmTXBFoMV_9B6AYJy6VoMlZ6ehA2QXoqwLWWD_iCZqbUbMG6K9djXYQCCtqhNzYXXfX3TjnqfuNHyBwbp1Llwl9VzjLBpxjrO72vlGrh_cE3VVC1nnA5Qg7fW6oocoG6Ucw2ku0iSScebPh0bgSUNJN7FbYvQYQhLLE9KvyznDv0OItnG7hwbHoCudKSc3W-1VdPMtxl-c735D-_-FBIX1qi4olUMPRH2_ZRLNoPYVtIppKL8dh4QmrHdDcUiY5AUMv0rMFml8jB8sXHbsGUbHEZQlu1SzrJl7QiDpxzhXbZ9YadUTikGeTYB_MZEBQZvDqjqejMU8z2UAGDzx6UCeCJDs5UW1AkU9a06kApYp6uaSImtdyEf5q3Me4G3bDJxmVSI4TDtXkFKgidiQqhZLIT6UMZ=w706-h218-s-no-gm?authuser=0"
                          className="img-fluid2"
                          alt="logo"
                        />
                      </div>
                      <div className="footer-text">
                        <p>
                          The security system uses QR code scanning to track the
                          entry and exit of students in college, maintaining a
                          record of their in and out history for monitoring and
                          security purposes.
                        </p>
                      </div>
                    </div>
                    <div className="footer-social-icon">
                      <span>Developers</span>
                      <a href="https://www.linkedin.com/in/aryan-raj7">
                        <img
                          className="dev-photo"
                          src="https://lh3.googleusercontent.com/pw/AP1GczNzJxi0IsOo5GHqrfjp-_kad3hPPP6D4gh2b7CrNdDbTTHU9pmdvKueRtKjDpsBvioof2eeeBDMULVcSmjzf6J9LgLwYZJ4pBdN4L9wwSClgi18CLqKTwU2syH2huCORx87cptUARKindydiEDHAoerj7QrQNMeJKWcFGBmeF6T-IeOHLpgZjYyC3s89QeS1khbF80ZUu1qc4y1IVzdD8lU_fxrtQpvFSsdTWaej-pJcBFzO3eMLX_6p1ljzBqFg82XQuFeO2t0s-twIe73m-cRabEoJ4mG6_F5S7-g8rceQhFC9zjFFa1vBLD_1MhqTRhDSA-dlwvlNbEuvT78ks7W-IvTnUm4Z-sV4kxCDleIBj2_6ofsS0CTtWSMlLWOXBiuOhbixhY8xwE3DxVYciONoHXGn5GPtKhvUIvQCyObzxgYs9OYaJ7wO32yV4Xbl0qAwFQ7Zet7Xw3cWyy50iGHhKDHknscp2q32Iucf50u4Dr-UyOUAYRJfcY6Hl8aN_MMocA9batnjr5I7fA74akOlmfF4u8zvCRp7dR_-qLUMWcyHM9HALWF-jcUABA_XQAgnMUBofZtZ0tYRusepPmwj4-AKo1wd_ZN3SP_HVoY1ixQxUF3zOALWmdzDROKlkd8oPwDrij9ng9sfLuM3h7i8N_3fRr91Qg5wzELLy_clJa8LoKrzC0ZP4htowzpga5-xMJTBeIXHcxwOe2czTvIfD4pOJDh15mdDhZSaeRkXQMTcbMFCgyK_m1pkd19tBqZL9G5ZEz8sup92oK4KdAJe5LpKAVjbtNzskE4Ux0CfAaUvf2yfiLLy23ePyKNRvwIdvkkDv5G1BzbRZyf3r6TmK8dY_zS09rGgxJFhdz2_CEhOq9gG1fkVvK2ajuEn_ac67wCCejk3_p4-r4rowZo=w913-h913-s-no-gm?authuser=0"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/harshit-roy">
                        <img
                          className="dev-photo"
                          src="https://lh3.googleusercontent.com/pw/AP1GczMlC7FikjQXZMu6wjPsKXd7mOAnrRqkKxCxvL7AMEelG_-eqFZlOQIFlpTt_X5AW0FmCkYEF_J9YcSo4WRI1xz9IcBSgNyoXYXhiKj2MLvF_JU0O-E7qRywu96Lz7eqnabO3k-Gf-U_SHYHgEAjg0I0bsMFWnIDNamaGO0HlUkJ9fACPgcUrmo-NFYy4VOb4qyWTNxkkJv0PFIAVAc3g-9C2CC7L-xVsjIyKkG32vf9vQcbZP2FKsKsM9Th52FH7QYIynxy7yvrBMtkbPbjyIRKmDd9vWW13PCT2wy27ZTF8Zw5H5Y2asS-Vg2h2jWQe8jHVqP8OcTcH_-fsKXCFAcV7HMTkps32pLbeMQs_phEf6JaicNW2ZaHbV7UAvj1rayAx2O1LCg9KYsSwfY3E1UD_xsexIBbMlsuquk-kJZTbqVCKvgm80QtEMYkNxw5EDppRYNc5vsfhxYkz2kSghzvSfJVP8tkKymNjRaP6yfgocPcu8PNBpDQmDnTRgVRIICELzjeTQgNdldx9YzCuqLGWyi7kbV9XIejUfIfhpGmgBg7HZ6NL4Uq56SGPnKzGPlWs2AGZVO5502-quOHGRa9RbZKYlffZb1lS-bHaayde_uDHddt3GkQRqddA4TusaHaqXgjCvQza7iTMbbQlInVkjnUz7ZCU_e2qFfP7giL_R2noKdxiS_JXclw1KSbzHHWVfnb7ZAD71CRDTQ-ByDWoE7L-l_OodL_vxqFu7f1JaoLEBvASl3spj_5dDGWOXLgJr2dkYCthi7XuA_S8iJkR5BF7UQI_fis9lbEXc8KlaMZB15gMAs3QE_I4j5juHp74UHCWs-4oHyDlb4p2znlB-6DWRSnC_GACzRq9xaRPUXK2cwj1_P-yX_AkYbLpGc3fR7gpuymP1EFw8jTLoW5=w720-h720-s-no-gm?authuser=0"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/kritik-srivastava">
                        <img
                          className="dev-photo"
                          src="https://lh3.googleusercontent.com/pw/AP1GczP4xdGeSUO0XqjI3-ePd3jXceZtyHM2eUkBK4xOZhp-4EOAWKqcSK1i5B04dZc-eeJG72JBmtUrRd0-Q7fbiD7UsFt_6jDZu-BmVxQgrlCNVMgDvvV3uCg6sEIoBMGeZBE9ih-_iKNgYMj1IL5AtknLvlaAkkMD_eXswvYgsO4JQQaXwgYfI1gp3nvRQcs5sLtaeQi1hXzxgYAzM-WuQgTI6RhrAdmsXU_9ja2aMop1VjIS9PRTFNO9A6TtO1Q6epCa7hmpOiyBX9uWM6YmSZ2Ghu8eqh-VDNoeQ5I1TVXYhHg4wVM5f1SDjkOccuVWY9uc9c1jM3TYbKvlyixH6yHxuiNwL734N7AhycpdXQKhTGkNlU9zOyI0xvcIW3GHt_e71eTxntL4Z83S_-QeNRZSc0QpywrPHBUdaHCiF9g0-KIMj4a424IUb0-16X8GAP9NJwZxk_ND35tN0tKY4GpLVRfmz9DXtrVMOXulmIFeKow0IRUc5sxj_wS5ygwuR_-Z_OxV4ILDhD2D39-gPi-RS2407LKfJIXQ4vQR5638JrQwSVJRsBoa3duvU2MxSa4FzBXpqukXTTmQs7JWocktfjHUOe6RR25bl83opyxL8lcYXvFjUHy2Uidk6POlG46W6vn_FuGPiiCvZuozqcG3HEt1pvDYOdiSBS9ffAJGnbTPiILoufpNNQAQVTMxBrBJaGUTiaOBrsfl0C54mKKSOqPUBEy4cWNf9PxRdAOn2uOQf6uuxAwzwMWMoaDiqljnEKnkhJ5teqIlD2k_FITPpvidODn0woUDNVcWPRbUUHw7j3_vtlxgrZHeP_JEK7oFObbNhElRAmP00Fy7Z75Nn0ifmjm2xXkcKG-2qNRQy0WZS2wd00yUDmucdxw-dTRoLh3SmjFgfEDuOYTg0TZqlw=w540-h540-s-no-gm?authuser=0"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/vivekbhatt3011">
                        <img
                          className="dev-photo"
                          src="https://lh3.googleusercontent.com/pw/AP1GczNts2T3Bcf_1uRBpMwduk3Npv1cipwkvnPmeIVnyX1LpnHaPjRpd_Kf02WgUCKReZl5UpPVg1CRLlR5I4-SEgRv2EED-Dq0ow6MGwnzS7i9wpqlNSmEB-5-FjLgsQaYewJgvVWH9juQmX8ae7F-8h5bffFWGZFWTcdy4oxTPaessIQd6Snmoj_GkyT7P0FqYrOHx4dx623HrKt55FxSjraGW8EFC9IUkC8ZnmJlbHAMrg6oZXdc1o4Dyu9dky339JAu74pY7UwW9Svqf9JcWdwKyKqGWCx-6SWSeilei_LYHEsDOPN5ie5bUsKTaPZm_lGI4zBoxVs7WK-fCCcz_jOwP2pw9RItYoyj3EywS41MtQsU5_R9pY80XYR6hmql2ZyqcvzqfQpOKusPl0Ki_B800KsX5ggQ83mpnatIDAG8JI84EqWyGR2RezxeihP8Tb7VQ0X6gKqV3n1zvDPgYYKXV1a-OMKMk-_R0VU1olLDZhzrBl7J94jTPUkG8aPheiKa19FOM7FfUMAl2Ej4c-2n5-fQLJIxS6XYqs9i26F8G5Pp8PU96JPuBo9tpYMoDZtpq93oucgLFah8ln-kv4GwuPaCR0nCdk5jwR1aE6I5VJA094Vt0sr4pKxmCXXHMC7dIsw8J6Vm0ICTxsWP_YkLrv_j4JGzab104cWDxeQa5EBuEtPcBeoUzUU-XTGQ29DZORc8ORGYOx307OyjcTDeTbMeB4eUQ6fWv1VRFVZsCdxDdhnKUl96ZV1R7BnhEcMZMvI7yDHQ-9YTHAMWrj18KeNczFNAf6wbdP94_E9DD6t_JPD-uOZl0lTkkJh1NcmNshiOJrVWwaYjT_L3uig1ZZYjgnSI5h8E2jzmC3pZhOao4Br1YyqQJHxJ0XEqktBdUebl6tGDS_kT9CW5eZ2H=w913-h913-s-no-gm?authuser=0"
                        />
                      </a>
                    </div>
                    <div className="info">
                      <div className="col-xl-6 col-md-6 mb-30">
                        <div className="single-cta">
                          <i className="far fa-envelope-open"></i>
                          <div className="cta-text">
                            <h4>
                              Mail us
                              <br />
                              <h5>dwarpalsystem@gmail.com</h5>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6 mb-30">
                        <div class="single-cta">
                          <i class="fas fa-map-marker-alt"></i>
                          <div class="cta-text">
                            <h4>
                              Find us
                              <br />
                              <h5>B3 Top Floor BIAS Bhimtal</h5>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container3">
              <div className="row">
                <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>Copyright &copy; 2023, All Right Reserved by Dwarpal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default HomePage;
